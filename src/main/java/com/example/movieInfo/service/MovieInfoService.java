package com.example.movieInfo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.movieInfo.dto.MovieInfo;
import com.example.movieInfo.repository.MovieInfoRepository;

@Service
public class MovieInfoService {
	
	@Autowired
	public MovieInfoRepository movieInfoRepo;
	
	
	public MovieInfo saveMovieInfo( MovieInfo movieInfo)
	{
		return movieInfoRepo.save(movieInfo);
	}
	
	
	public Optional<MovieInfo> getMovieInfo( int movieId)
	{
		return movieInfoRepo.findById(movieId);
	}
	

}
