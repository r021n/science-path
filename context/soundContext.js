import { createContext, useContext, useState } from "react";
import { Audio } from "expo-av";
import { useEffect } from "react";

const SoundContext = createContext()

export const SoundProvider = ({ children }) => {

    const [soundOn, setSoundOn] = useState(false);
    const [sound, setSound] = useState();

    const loadingSound = async () => {
        console.log("Loading Sound");
        const { sound } = await Audio.Sound.createAsync(
            require("../assets/music/sound_bg.mp3"),
            { shouldPlay: false, isLooping: true }
        );
        setSound(sound);
    };

    const playPauseAudio = async () => {
        soundOn ? await sound.pauseAsync() : await sound.playAsync();
        setSoundOn(!soundOn)
    };

    useEffect(() => {
        !sound ? loadingSound() : setSound(sound);
    }, [sound]);

    return (
        <SoundContext.Provider value={{ soundOn, playPauseAudio }}>
            {children}
        </SoundContext.Provider>
    )
}

export const useAudio = () => useContext(SoundContext)