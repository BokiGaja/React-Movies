import { httpService } from "./HttpService";
import { ENDPOINTS } from "./HttpService";

class Movies {
    getAll() {
        return httpService.get(ENDPOINTS.MOVIES);
    }

    createMovie(movie) {
        return httpService.post(ENDPOINTS.MOVIES, movie)
    }

    getOne(id) {
        return httpService.get(ENDPOINTS.MOVIES +'/'+ id)
    }

    edit(id, body) {
        return httpService.put(ENDPOINTS.MOVIES+'/'+ id, body)
    }

    delete(id) {
        return httpService.delete(ENDPOINTS.MOVIES+'/'+id);
    }
}

export const moviesService = new Movies();