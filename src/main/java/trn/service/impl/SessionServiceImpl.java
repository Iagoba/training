package trn.service.impl;

import trn.service.SessionService;
import trn.domain.Session;
import trn.repository.SessionRepository;
import trn.service.dto.SessionDTO;
import trn.service.mapper.SessionMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing {@link Session}.
 */
@Service
@Transactional
public class SessionServiceImpl implements SessionService {

    private final Logger log = LoggerFactory.getLogger(SessionServiceImpl.class);

    private final SessionRepository sessionRepository;

    private final SessionMapper sessionMapper;

    public SessionServiceImpl(SessionRepository sessionRepository, SessionMapper sessionMapper) {
        this.sessionRepository = sessionRepository;
        this.sessionMapper = sessionMapper;
    }

    /**
     * Save a session.
     *
     * @param sessionDTO the entity to save.
     * @return the persisted entity.
     */
    @Override
    public SessionDTO save(SessionDTO sessionDTO) {
        log.debug("Request to save Session : {}", sessionDTO);
        Session session = sessionMapper.toEntity(sessionDTO);
        session = sessionRepository.save(session);
        return sessionMapper.toDto(session);
    }

    /**
     * Get all the sessions.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<SessionDTO> findAll() {
        log.debug("Request to get all Sessions");
        return sessionRepository.findAll().stream()
            .map(sessionMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one session by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<SessionDTO> findOne(Long id) {
        log.debug("Request to get Session : {}", id);
        return sessionRepository.findById(id)
            .map(sessionMapper::toDto);
    }

    /**
     * Delete the session by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Session : {}", id);
        sessionRepository.deleteById(id);
    }
}
