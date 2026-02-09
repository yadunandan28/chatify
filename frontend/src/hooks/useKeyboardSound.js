const KeyStrkokeSound = [
    new Audio ("/assets/sounds/keystroke1.mp3"),
    new Audio ("/assets/sounds/keystroke2.mp3"),
    new Audio ("/assets/sounds/keystroke3.mp3"),        
    new Audio ("/assets/sounds/keystroke4.mp3"),
];

function useKeyboardSound() {
    const playRandomKeyStrokeSound = () => {
        const randomIndex = Math.floor(Math.random() * KeyStrkokeSound.length);
        KeyStrkokeSound[randomIndex].currentTime = 0;
        KeyStrkokeSound[randomIndex].play();
    };

    return { playRandomKeyStrokeSound };
}

export default useKeyboardSound;