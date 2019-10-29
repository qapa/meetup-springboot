package meetup

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@SpringBootApplication
class Application

@RestController
class HelloController {
    @CrossOrigin("http://127.0.0.1:3000")
    @GetMapping("/hello")
    fun hello() = "Hello, World!"
}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}
