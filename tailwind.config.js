module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  purge: [
    './pages/**/*.html',
    './pages/**/*.js',
    './pages/**/*.jsx',
    './public/**/*.html',
    './pages/**/*.ts',
    './pages/**/*.tsx',
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
