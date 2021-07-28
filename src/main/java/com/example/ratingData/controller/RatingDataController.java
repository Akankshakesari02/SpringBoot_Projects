package com.example.ratingData.controller;

import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.Cache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ratingData.dto.RatingData;
import com.example.ratingData.service.RatingDataService;

@RestController
@RequestMapping("/ratings")
public class RatingDataController {
	
	@Autowired
	public RatingDataService ratingDataService;
	
	@GetMapping("{movieId}")
	public Optional<RatingData> getRatingData(@PathVariable int movieId)
	{
		//System.out.println("controller"+ratingDataService.getRatingData(movieId));
		return ratingDataService.getRatingData(movieId);
	}
	
	@PostMapping("/save")
	public RatingData save(@RequestBody RatingData ratingData)
	{
		return ratingDataService.save(ratingData);
	}
	
	@GetMapping("/all")
	public List<RatingData> getAllRatingData()
	{
		
		return ratingDataService.getAllRatingData();
	}
	

}
