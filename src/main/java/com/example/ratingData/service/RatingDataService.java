package com.example.ratingData.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.ratingData.dto.RatingData;
import com.example.ratingData.repository.RatingDataRepository;

@Service
public class RatingDataService {
	
	@Autowired
	public RatingDataRepository ratingDataRepo;
	
	public Optional<RatingData> getRatingData(int movieId)
	{
		
		return ratingDataRepo.findById(movieId);
	}
	
	public RatingData save( RatingData ratingData)
	{
		return ratingDataRepo.save(ratingData);
	}
	
	public List<RatingData> getAllRatingData()
	{
		
		return ratingDataRepo.findAll();
	}
	

}
