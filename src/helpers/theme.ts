export type ThemeType = 'default' | 'space-x'

export const setTheme = (theme: ThemeType) => {
  document.documentElement.setAttribute('data-theme', theme)
}