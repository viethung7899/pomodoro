type ColorScheme = {
  icon: string,
  background: string,
  darkBorder: string,
  text: string,
  darkBackground: string,
  darkText: string,
}

const pomodoro: ColorScheme = {
  icon: '🍅',
  background: 'bg-red-200',
  darkBackground: 'dark:bg-red-300',
  text: 'text-red-500',
  darkBorder: 'dark:border-red-300',
  darkText: 'dark:text-red-300',
}

const arancia: ColorScheme = {
  icon: '🍊',
  background: 'bg-orange-200',
  darkBackground: 'dark:bg-orange-300',
  text: 'text-orange-500',
  darkBorder: 'dark:border-orange-300',
  darkText: 'dark:text-orange-300',
}

const kiwi: ColorScheme = {
  icon: '🥝',
  background: 'bg-lime-200',
  darkBackground: 'dark:bg-lime-300',
  text: 'text-lime-500',
  darkBorder: 'dark:border-lime-300',
  darkText: 'dark:text-lime-300',
}

export const colors = new Map<string, ColorScheme>([
  ['pomodoro', pomodoro],
  ['arancia', arancia],
  ['kiwi', kiwi]
]);
