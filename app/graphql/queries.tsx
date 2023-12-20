import { gql } from "@apollo/client";

export const GET_ALL_THE_GAMES = gql`
    query GET_ALL_THE_GAMES_QUERY {
        games {
            id
            title
            date_released
        }
    }
`