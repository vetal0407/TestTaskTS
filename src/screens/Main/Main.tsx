import React, { useEffect } from 'react'
import {
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { fetchSongsGet } from '../../redux/actions/main'

import Album from '../../components/Album/Album'
import Loading from '../../components/Loading/Loading'
import { AppState } from "../../redux/rootReducer"

type Props = MapStateToPropsI & MapDispatchToPropsI

const Main: React.FC<Props> = ({
    data,
    isLoading,

    fetchSongsGet
}) => {

  useEffect(() => {
    fetchSongsGet()
  }, [])

  return (
    <ScrollView>
      {!isLoading
        ? data.map(album => <Album
              key={album.id}
              album={album}
          />)
        : <Loading/>
      }
    </ScrollView>
  )
}

interface MapStateToPropsI {
  data: any,
  isLoading: boolean,
}

interface MapDispatchToPropsI {
  fetchSongsGet: () => void
}

function mapStateToProps(state: AppState): MapStateToPropsI {
  return {
    data: state.main.data,
    isLoading: state.main.isLoading,
  }
}

const mapDispatchToProps: MapDispatchToPropsI = {
  fetchSongsGet
}

export default connect(mapStateToProps, mapDispatchToProps,)(Main)
