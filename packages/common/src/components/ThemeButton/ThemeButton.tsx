import { useEffect, useState } from 'react';
import { THEME_CHANNEL } from '../../theme/ThemeBroadcastChannel';
import { THEME_UPDATE_EVENT, toggleThemeBroadcast } from '../../theme/ThemeProvider';
import { getCurrentThemeNameFromStorage } from '../../theme/theme.storage';
import { styles } from './ThemeButton.css';

interface ThemeButtonProps { }

const themeCookieName = 'theme';

export const ThemeButton = ({
  ...props
}: ThemeButtonProps) => {
  const [currentTheme, setCurrentTheme] = useState(getCurrentThemeNameFromStorage());

  useEffect(() => {
    const channel = new BroadcastChannel(THEME_CHANNEL);
    channel.onmessage = (event) => {
      if (event.data.type === THEME_UPDATE_EVENT) {
        const themeName = getCurrentThemeNameFromStorage();
        setCurrentTheme(themeName);
      }
    }

    return () => {
      channel.close();
    }
  }, []);

  return (
    <div css={styles}>
      <label className="switch">
        <input type="checkbox" onChange={toggleThemeBroadcast} checked={currentTheme === 'light'} />
        <span className="slider round"></span>
      </label>
    </div>
  )
};
