import React, { useEffect } from 'react'
import {
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { fetchSongsGet } from '../../redux/actions/main'

import Album from '../../components/Album/Album'
import Loading from '../../components/Loading/Loading'
import { AppState } from "../../redux/rootReducer"

import { AlbumI } from "../../interfaces/trackInterfaces"

type Props = MapStateToPropsI & MapDispatchToPropsI

const Main: React.FC<Props> = ({
    albums,
    isLoading,

    fetchSongsGet
}) => {

  useEffect(() => {
    fetchSongsGet()
  }, [])

  return (
    <ScrollView>
      {!isLoading
        ? albums.map((album: AlbumI) => <Album
              key={album.id}
              album={album}
          />)
        : <Loading/>
      }
    </ScrollView>
  )
}

interface MapStateToPropsI {
  albums: Array<AlbumI>,
  isLoading: boolean,
}

interface MapDispatchToPropsI {
  fetchSongsGet: () => void
}

function mapStateToProps(state: AppState): MapStateToPropsI {
  return {
    albums: state.main.albums,
    isLoading: state.main.isLoading,
  }
}

const mapDispatchToProps: MapDispatchToPropsI = {
  fetchSongsGet
}

export default connect(mapStateToProps, mapDispatchToProps,)(Main)
