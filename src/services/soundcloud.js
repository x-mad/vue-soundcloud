export default {
  init () {
    window.SC.initialize({
      client_id: '2t9loNQH90kzJcsFCODdigxfp325aq4z'
    });
  },

  search (searchStr) {
    return window.SC.get('/tracks', {q: searchStr})
  },

  widget (trackUrl) {
    return window.SC.oEmbed(trackUrl, { auto_play: true })
  },

  stream (trackId) {
    return window.SC.stream('/tracks/293')
  }
}