package com.example.movieInfo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.movieInfo.dto.MovieInfo;

@EnableJpaRepositories
public interface MovieInfoRepository extends JpaRepository<MovieInfo, Integer>{

}
