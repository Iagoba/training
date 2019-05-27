package trn.service.mapper;

import trn.domain.*;
import trn.service.dto.SessionDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Session} and its DTO {@link SessionDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface SessionMapper extends EntityMapper<SessionDTO, Session> {



    default Session fromId(Long id) {
        if (id == null) {
            return null;
        }
        Session session = new Session();
        session.setId(id);
        return session;
    }
}
