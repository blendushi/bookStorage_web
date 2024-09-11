import adapter from '@sveltejs/adapter-node';

export default {
  kit: {
    adapter: adapter(),
    alias: {
      $lib: 'lib', // Define $lib alias to point to your lib directory
    }
  }
};