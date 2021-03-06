import * as types from './mutation-types'

export default {
  [types.SET_SONG_DETAIL](state, songDetail) {
    state.stateSongDetail = songDetail
  },
  [types.SET_SONG_LIST](state, songList) {
    state.stateSongList = songList
  },
  [types.SET_SONG_HISTORY](state, songHistory) {
    state.stateSongHistory = songHistory
  },
  [types.SET_CURRENT_SONG_INDEX](state, currentSongIndex) {
    state.stateCurrentSongIndex = currentSongIndex
  },
  [types.SHOW_PLAY_MUSIC](state, showPlayMusic) {
    state.stateShowPlayMusic = showPlayMusic
  },
  [types.SET_PLAY_MODE](state, playMode) {
    state.statePlayMode = playMode
  },
  [types.EMPTY_SONG_LIST](state) {
    state.stateSongList = []
  },
  [types.SHOW_ADD_SONG](state, showAddSong) {
    state.stateShowAddSong = showAddSong
  }
}
