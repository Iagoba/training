package trn.service.dto;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link trn.domain.Session} entity.
 */
public class SessionDTO implements Serializable {

    private Long id;

    private String type;

    private String desc;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        SessionDTO sessionDTO = (SessionDTO) o;
        if (sessionDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), sessionDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "SessionDTO{" +
            "id=" + getId() +
            ", type='" + getType() + "'" +
            ", desc='" + getDesc() + "'" +
            "}";
    }
}
