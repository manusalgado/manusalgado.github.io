export const addInfluencer = influencers => dispatch => {
  fetch('./influencers.json')
    .then((res) => res.json())
    .then(influencers => {
      dispatch({ type: 'ADD_INFLUENCERS', influencers });
    })
}

export const voteUp = id => ({
  type: 'VOTE_UP',
  id
})

export const voteDown = id => ({
  type: 'VOTE_DOWN',
  id
})