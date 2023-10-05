package com.nareme.leagueChamps.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.nareme.leagueChamps.entity.models.LeagueChamps;

public interface ILeagueChampsDao extends CrudRepository<LeagueChamps, Long> {

}
