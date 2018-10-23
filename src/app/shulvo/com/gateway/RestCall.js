
import {Alert} from 'react-native';

export const callGetApi = (url) => {
        try {
           return fetch(url)
            .then((res) => res.json());
        } catch (error) {
          console.error(error);
        }
      }

      export const callPostApi = (url, payload) => {
        try {
           return fetch(url)
            .then((res) => res.json());
        } catch (error) {
          console.error(error);
        }
      }


