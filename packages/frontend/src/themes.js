const base = {
  headerHeight: 32,
  infoAvatarHeight: 64,
  commentAvatarHeight: 32
};

export const light = Object.assign({}, base, {
  foreground: 'black',
  background: 'white',

  // HT Sunlight Foundation Data Visualization Style Guidelines
  // https://sunlightfoundation.com/2014/03/12/datavizguide/
  textMain: '#635F5D',
  textLight: '#8E8883'
});

export const dark = Object.assign({}, base, {
  foreground: 'white',
  background: 'black'
});
