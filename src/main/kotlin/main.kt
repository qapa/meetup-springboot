package meetup

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.data.repository.CrudRepository
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDate
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@SpringBootApplication
class Application

@RestController
class HelloController {
    @CrossOrigin("http://127.0.0.1:3000")
    @GetMapping("/hello")
    fun hello() = "Hello, World!"
}

@RestController
class VideoGamesController(@Autowired val repository: VideoGamesRepository) {
    @CrossOrigin("http://127.0.0.1:3000")
    @GetMapping("/video-games")
    fun listVideoGames(): Iterable<VideoGame> = repository.findAll()
}

@Entity
@Table(name = "video_games")
class VideoGame(
        @Id @Column(name = "id") var id: Int,
        @Column(name = "title") var title: String,
        @Column(name = "author") var author: String,
        @Column(name = "release_date") var releaseDate: LocalDate,
        @Column(name = "image_url") var imageUrl: String
)

interface VideoGamesRepository : CrudRepository<VideoGame, Int>

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}
