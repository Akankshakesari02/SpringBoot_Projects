package com.example.microservices.dto;

import javax.annotation.Generated;



public class RatingData {
	private int movieId;
	private int rating;
	
	public RatingData() {
		// TODO Auto-generated constructor stub
	}
	public int getMovieId() {
		return movieId;
	}
	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	@Override
	public String toString() {
		return "RatingData [movieId=" + movieId + ", rating=" + rating + "]";
	}
	
	
	
	
	

}
