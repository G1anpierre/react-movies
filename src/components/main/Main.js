import React, {useEffect, useCallback} from 'react'
import {connect} from 'react-redux'
import MovieGroup from '../movie-group/MovieGroup'
import Title from '../title/Title'
import {fetchData} from '../../actions'
import './main.css'

const Main = ({searchWord, fetchInfo}) => {
  const makeSearch = useCallback(() => {
    fetchInfo(searchWord)
  }, [fetchInfo, searchWord])

  useEffect(() => {
    makeSearch(searchWord)
  }, [searchWord, makeSearch])

  return (
    <div className="main">
      <Title />
      <MovieGroup />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    searchWord: state.search,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchInfo: searchWord => dispatch(fetchData(searchWord)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
