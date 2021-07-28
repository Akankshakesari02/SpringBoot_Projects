package com.example.microservices.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.microservices.dto.CatalogItem;
import com.example.microservices.dto.MovieInfo;
import com.example.microservices.dto.RatingData;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

@RestController
public class MovieCatalogController {
	@Autowired
	public RestTemplate restTemplate;

	@GetMapping("{userId}")
	@HystrixCommand(fallbackMethod = "getFallbackCatalogList")
	public List<CatalogItem> getCatalogList(@PathVariable String userId) {
		HttpHeaders httpHeader = new HttpHeaders();
		httpHeader.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<Object> requestEntity = new HttpEntity<Object>(httpHeader);
		ResponseEntity<List<RatingData>> ratings = restTemplate.exchange("http://rating-data-service/ratings/all",
				HttpMethod.GET, requestEntity, new ParameterizedTypeReference<List<RatingData>>() {
				});
		List<RatingData> ratingList = ratings.getBody();
		List<CatalogItem> catalogList = new ArrayList<CatalogItem>();
		for (RatingData r : ratingList) {
			ResponseEntity<MovieInfo> movieInf = restTemplate.exchange(
					"http://movie-info-service/movies/" + r.getMovieId(), HttpMethod.GET, requestEntity,
					MovieInfo.class);
			catalogList.add(new CatalogItem(movieInf.getBody().getName(), "test", r.getRating()));
		}

		return catalogList;

	}

	public List<CatalogItem> getFallbackCatalogList(@PathVariable String userId)

	{
		return Arrays.asList(new CatalogItem("No movie", "----", 0));
	}

}
