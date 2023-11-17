import { useState, useEffect } from 'react';

interface Props {
  text: string;
}
const Typewriter = ({ text }: Props) => {
  const [displayText, setDisplayText] = useState<string>('');

  useEffect(() => {
    let index: number = 0;
    let ids: number = -1;
    let run = () => {
      ids = setTimeout(callback, 100);
    }

    function callback() {
      const show = () => setDisplayText(text.slice(0, index));
      if (index > text.length) index = 0;
      if (index === text.length) {
        index += 1;
        ids = setTimeout(callback, 4000);
        show();
        return;
      }
      if ([",", "."].includes(text.charAt(index + 1))) {
        index += 1;
        ids = setTimeout(callback, 1000);
        show();
        return;
      }

      index += 1;
      show();
      return run();
    }

    run();
    return () => {
      clearTimeout(ids);
    }
  }, [text])

  return <>{displayText}</>;
};

export default Typewriter;