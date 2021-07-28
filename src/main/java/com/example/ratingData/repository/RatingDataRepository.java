package com.example.ratingData.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.ratingData.dto.RatingData;

@EnableJpaRepositories
public interface RatingDataRepository extends JpaRepository<RatingData , Integer> {

}
