// AlanAi.js
import React, { useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

const AlanAi = ({ handleNavigation }) => {
  useEffect(() => {
    alanBtn({
      key: '796a74e9ebe94edbf2e37dcf386dbe962e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'Moving to AboutMe') {
          handleNavigation(commandData.command);
        }
      }
    });
  }, [handleNavigation]);

  return (
    <div>
      {/* Any additional components or UI related to Alan AI can be added here */}
    </div>
  );
};

export default AlanAi;
