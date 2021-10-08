import { writable } from 'svelte/store';

type Theme = {
  display: string;
  class: string;
};

const themes = new Map<string, Theme>();
themes.set('pomodoro', {
  display: '🍅 pomodoro',
  class: 'theme-pomodoro',
});

themes.set('arancia', {
  display: '🍊 arancia',
  class: 'theme-arancia',
});

themes.set('kiwi', {
  display: '🥝 kiwi',
  class: 'theme-kiwi',
});

themes.set('limone', {
  display: '🍋 limone',
  class: 'theme-limone',
});

themes.set('mirtillo', {
  display: '🫐 mirtillo',
  class: 'theme-mirtillo',
});

themes.set('cocco', {
  display: '🥥 cocco',
  class: 'theme-cocco',
});

export const dark = writable(false);
export const theme = writable('pomodoro');
export { themes };
