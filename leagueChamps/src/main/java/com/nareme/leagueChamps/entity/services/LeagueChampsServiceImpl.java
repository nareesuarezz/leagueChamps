package com.nareme.leagueChamps.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nareme.leagueChamps.entity.dao.ILeagueChampsDao;
import com.nareme.leagueChamps.entity.models.LeagueChamps;

@Service
public class LeagueChampsServiceImpl implements ILeagueChampsService {

	@Autowired
	private ILeagueChampsDao leagueChampsDao;
	
	@Override
	public LeagueChamps get(long id) {
		return leagueChampsDao.findById(id).get();
	}

	@Override
	public List<LeagueChamps> getAll() {
		
		return (List<LeagueChamps>)leagueChampsDao.findAll();
	}

	@Override
	public void post(LeagueChamps champion) {
		leagueChampsDao.save(champion);
		
	}

	@Override
	public void put(LeagueChamps champion, long id) {
		leagueChampsDao.findById(id).ifPresent((x)->{
			champion.setId(id);
			leagueChampsDao.save(champion);
		});
		
	}

	@Override
	public void delete(long id) {
		leagueChampsDao.deleteById(id);
		
	}

}
