import process from 'node:process';
import antfu from '@antfu/eslint-config';
import format from 'eslint-plugin-format';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    stylistic: {
      semi: true,
    },
    plugins: {
      format,
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/no-deprecated-slot-attribute': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
  },
  tailwindcss.configs['flat/recommended'],
);
