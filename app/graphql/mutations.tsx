import { gql } from "@apollo/client";

export const CREATE_THIS_NEW_GAME_RECORD = gql`
    mutation CREATE_THIS_NEW_GAME_RECORD_MUTATION ($title: String! $date: String!) {
        
    }
`

export const UPDATE_THIS_GAME_DETAILS = gql`
    mutation UPDATE_THIS_GAME_DETAILS_MUTATION ($id:ID!, $title: String!, $date: String!) {
        updateGame(id:$id, title:$title, date:$date) {
            id
            title
            date_released
            total_users_played
            total_reviews
        }
    }
`

export const DELETE_THIS_GAME = gql`
    mutation DELETE_THIS_GAME_MUTATION ($id:ID!) {
        deleteGame(id:$id) {
            id
            title
        }
    }
`