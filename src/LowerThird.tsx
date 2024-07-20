import { useCurrentFrame, interpolate, Easing } from 'remotion';
import Logo from './flyxtologo.png';

// Helper function to split text into words or characters
const splitText = (text: string, splitBy: 'characters' | 'words' = 'characters') => {
  if (splitBy === 'characters') {
    return text.split('').map((char, index) => ({
      char,
      key: `${char}-${index}`,
    }));
  } else if (splitBy === 'words') {
    return text.split(' ').map((word, index) => ({
      word,
      key: `${word}-${index}`,
    }));
  }
  return [];
};

const LowerThird = () => {
  const frame = useCurrentFrame();

  // Animate the entire lower third with a complex animation
  const translateX = interpolate(frame, [0, 15], [-100, 0], { // Speed up
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const rotateY = interpolate(frame, [0, 15], [90, 0], { // Speed up
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(frame, [0, 10], [0, 1], { // Speed up
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Animate the logo card sliding in from left to right
  const logoCardTranslateX = interpolate(frame, [0, 15], [-100, 0], { // Speed up
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Animate the logo with a pop-up effect
  const logoScale = interpolate(frame, [12, 20, 25], [0.5, 1.5, 1], { // Speed up
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.exp),
  });
  const logoOpacity = interpolate(frame, [10, 15], [0, 1], { // Speed up
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Animate the subtitle card with a smoother transition from left to right
  const subtitleTranslateX = interpolate(frame, [0, 22], [-100, 0], { // Speed up
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.exp),
  });
  const subtitleOpacity = interpolate(frame, [0, 30], [0, 1], { // Speed up
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Define the text for title and subtitle
  const title = "Hashen Dulanjana";
  const subtitle = "High Five";

  // Split title and subtitle into words for animation
  const titleWords = splitText(title, 'words');
  const subtitleChars = splitText(subtitle, 'characters');

  return (
    <div
      className="absolute bottom-4 left-4 flex flex-col h-28 items-start space-y-2 p-4 bg-blue-600 text-white rounded-lg rounded-tr-[100px] rounded-bl-[100px] shadow-lg pr-14"
      style={{
        // Animation for the whole lower third card
        transform: `translateX(${translateX}%) rotateY(${rotateY}deg)`,
        opacity: opacity,
        transformStyle: 'preserve-3d',
      }}
    >

      {/* Main content card with title and logo */}
      <div className="relative flex items-start space-y-4">

        {/* Logo card sliding in from left to right */}
        <div
          className="flex items-center absolute bottom-[-24px] left-[-20px] justify-center p-3 pr-20 bg-white rounded-lg rounded-bl-[100px] rounded-tr-[80px] shadow-md pl-10 pb-8 h-[120px]"
          style={{
            // Animate the logo card sliding in
            transform: `translateX(${logoCardTranslateX}px)`,
            transition: 'transform 0.5s ease-out', // Adjust timing as needed
          }}
        >
          <div className='relative'>
            {/* Logo with pop-up effect */}
            <img
              src={Logo}
              alt="Logo"
              className="ml-2"
              style={{
                transform: `scale(${logoScale})`, // Pop-up effect
                opacity: logoOpacity,
                width: '4rem', // Adjust size as needed
                height: '4rem', // Adjust size as needed
                transition: 'transform 0.2s ease-out, opacity 0.3s ease-out', // Speed up
              }}
            />
          </div>
        </div>

        <div className='flex-row relative pt-5'>
          {/* Subtitle card */}
          <div
            className="absolute left-[100px] bottom-[52px] flex items-center space-x-2 p-2 bg-red-600 text-white rounded-lg text-xl rounded-tr-[100px] pr-12 pl-12 shadow-md rounded-bl-[100px]"
            style={{
              // Smooth animation for the subtitle card from left to right
              transform: `translateX(${subtitleTranslateX}px)`,
              opacity: subtitleOpacity,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.5s ease-out, opacity 0.5s ease-out', // Speed up
            }}
          >
            {/* Subtitle text animation */}
            {subtitleChars.map((item, index) => {
              // Character-specific animations for the subtitle
              const charOpacity = interpolate(frame, [30 + index * 2, 35 + index * 2], [0, 1], { // Speed up
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });
              const charTranslateX = interpolate(frame, [30 + index * 2, 35 + index * 2], [10, 0], { // Speed up
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });
              const charRotateX = interpolate(frame, [30 + index * 2, 35 + index * 2], [90, 0], { // Speed up
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });

              return (
                <span
                  key={item.key}
                  className="inline-block"
                  style={{
                    opacity: charOpacity,
                    transform: `translateX(${charTranslateX}px) rotateX(${charRotateX}deg)`,
                    transformStyle: 'preserve-3d',
                    transition: 'opacity 0.1s ease-out, transform 0.1s ease-out', // Speed up
                  }}
                >
                  {item.char}
                </span>
              );
            })}
          </div>

          {/* Title text animation */}
          <div className="text-3xl font-bold flex ml-52 ">
            {titleWords.map((item, index) => {
              // Word-specific animations for the title
              const wordOpacity = interpolate(frame, [15 + index * 5, 20 + index * 5], [0, 1], { // Speed up
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });
              const wordTranslateY = interpolate(frame, [15 + index * 5, 20 + index * 5], [10, 0], { // Speed up
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });
              const wordRotateX = interpolate(frame, [15 + index * 5, 20 + index * 5], [90, 0], { // Speed up
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });

              return (
                <span
                  key={item.key}
                  className="inline-block whitespace-nowrap"
                  style={{
                    opacity: wordOpacity,
                    transform: `translateY(${wordTranslateY}px) rotateX(${wordRotateX}deg)`,
                    transformStyle: 'preserve-3d',
                    transition: 'opacity 0.2s ease-out, transform 0.2s ease-out', // Speed up
                  }}
                >
                  {item.word}&nbsp; {/* Add space after each word */}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerThird;
