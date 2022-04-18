module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './public/**/*.html',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    //기본 폰트로 사용할 폰트들 기본설정해줌.
    fontFamily: {
      sans: ['Noto Sans KR', 'Montserrat'],
      serif: ['Lato'],
      mono: ['Corinthia', 'Shadows Into Light', 'Staatliches'],
      cursive: ['Architects Daughter'],
      jua: ['Jua'],
    },
    extend: {},
  },
  plugins: [],
};
