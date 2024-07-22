import { useCurrentFrame, interpolate, Easing } from 'remotion';

// Helper function to split text into words or characters
const splitText = (text, splitBy = 'characters') => {
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

const LowerThird = ({ titleText, subtitleText, titleColor, subtitleColor, logoURL }) => {
  const frame = useCurrentFrame();

  // Animate the entire lower third with a complex animation
  const translateX = interpolate(frame, [0, 15], [-100, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const rotateY = interpolate(frame, [0, 15], [90, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Animate the logo card sliding in from left to right
  const logoCardTranslateX = interpolate(frame, [0, 22], [-100, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const logoCardOpacity = interpolate(frame, [0, 22], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Animate the logo with a pop-up effect
  const logoScale = interpolate(frame, [22, 28, 40], [0, 1.5, 1.4], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.exp),
  });
  const logoOpacity = interpolate(frame, [10, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Animate the subtitle card with a smoother transition from left to right
  const subtitleTranslateX = interpolate(frame, [0, 50], [-100, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.exp),
  });

  // Animate the sweep with a smoother transition from left to right
  const sweepTranslateX = interpolate(frame, [20, 120, 200, 300, 400], [-80, 600, 200, 350, -80], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.ease),
  });

  const subtitleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Define the text for title and subtitle
  const title = titleText;
  const subtitle = subtitleText;

  // Split title and subtitle into words for animation
  const titleWords = splitText(title, 'words');
  const subtitleChars = splitText(subtitle, 'characters');

  return (
    <div>
      {/* Subtitle card */}
      <div>
        <div
          className="absolute left-[175px] bottom-[170px] flex items-center space-x-2 p-2 text-white rounded-lg text-xl rounded-tr-[100px] pr-12 pl-12 shadow-md rounded-bl-[100px] z-30"
          style={{
            transform: `translateX(${subtitleTranslateX}px)`,
            opacity: subtitleOpacity,
            transformStyle: 'preserve-3d',
            backgroundColor: subtitleColor,
          }}
        >
          {/* Subtitle text animation */}
          {subtitleChars.map((item, index) => {
            const charOpacity = interpolate(frame, [30 + index * 2, 35 + index * 2], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const charTranslateX = interpolate(frame, [30 + index * 2, 35 + index * 2], [10, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const charRotateX = interpolate(frame, [30 + index * 2, 35 + index * 2], [90, 0], {
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
                }}
              >
                {item.char}
              </span>
            );
          })}
        </div>
        {/* Logo card sliding in from left to right */}
        <div
          className="flex items-center absolute bottom-[95px] left-[60px] justify-center p-3 pr-20 bg-white rounded-lg rounded-bl-[100px] rounded-tr-[80px] shadow-md pl-10 pb-8 h-[120px] z-10 overflow-hidden"
          style={{
            transform: `translateX(${logoCardTranslateX}px)`,
            opacity: logoCardOpacity,
          }}
        >
          <div className="relative">
            {/* Logo with pop-up effect */}
            <img
              src={logoURL}
              alt="Logo"
              className=""
              style={{
                transform: `scale(${logoScale})`,
                opacity: logoOpacity,
                width: '4rem',
                height: '4rem',
              }}
            />
          </div>
        </div>
        <div
          className="absolute bottom-24 left-24 flex flex-col h-28 items-start space-y-2 p-4 text-white rounded-lg rounded-tr-[100px] rounded-bl-[100px] shadow-lg pr-14 overflow-hidden"
          style={{
            transform: `translateX(${translateX}%) rotateY(${rotateY}deg)`,
            opacity: opacity,
            transformStyle: 'preserve-3d',
            backgroundColor: titleColor,
          }}
        >
          <div
            className="absolute py-[62px] w-[30px] blur-[10px] top-[-42px] bg-white opacity-40 bottom-[-23px] rotate-[18deg] z-0"
            style={{
              transform: `translateX(${sweepTranslateX}px) rotateZ(20deg)`,
              transformStyle: 'preserve-3d',
            }}
          ></div>

          {/* Main content card with title and logo */}
          <div className="relative flex items-start space-y-4">
            <div className="flex-row relative pb-5">
              <div className="relative">
                {/* Title text animation */}
                <div className="text-3xl font-bold flex ml-52">
                  {titleWords.map((item, index) => {
                    const wordOpacity = interpolate(frame, [15 + index * 5, 20 + index * 5], [0, 1], {
                      extrapolateLeft: 'clamp',
                      extrapolateRight: 'clamp',
                    });
                    const wordTranslateY = interpolate(frame, [15 + index * 5, 20 + index * 5], [10, 0], {
                      extrapolateLeft: 'clamp',
                      extrapolateRight: 'clamp',
                    });
                    const wordRotateX = interpolate(frame, [15 + index * 5, 20 + index * 5], [90, 0], {
                      extrapolateLeft: 'clamp',
                      extrapolateRight: 'clamp',
                    });

                    return (
                      <span
                        key={item.key}
                        className="inline-block whitespace-nowrap pt-7"
                        style={{
                          opacity: wordOpacity,
                          transform: `translateY(${wordTranslateY}px) rotateX(${wordRotateX}deg)`,
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        {item.word}&nbsp;
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerThird;
