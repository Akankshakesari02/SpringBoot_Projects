package com.example.movieInfo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.movieInfo.dto.MovieInfo;
import com.example.movieInfo.service.MovieInfoService;

@RestController
@RequestMapping("/movies")
public class MovieInfoController {
	@Autowired
	public MovieInfoService movieInfoService;
	
	@PostMapping("/save")
	public MovieInfo saveMovieInfo(@RequestBody MovieInfo movieInfo)
	{
		return movieInfoService.saveMovieInfo(movieInfo);
	}
	
	@GetMapping("{movieId}")
	public Optional<MovieInfo> getMovieInfo(@PathVariable int movieId)
	{
		return  movieInfoService.getMovieInfo(movieId);
	}

}
