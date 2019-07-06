package ru.vkras.banking.DTO;

import javax.persistence.*;

@Entity
@Table(name = "currency")
public class CurrencyDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String alfa_code;

    private String alfa2_code;

    private String course;

    public CurrencyDTO(String alfa_code, String alfa2_code, String course) {
        this.alfa_code = alfa_code;
        this.alfa2_code = alfa2_code;
        this.course = course;
    }

    public CurrencyDTO(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAlfa_code() {
        return alfa_code;
    }

    public void setAlfa_code(String alfa_code) {
        this.alfa_code = alfa_code;
    }

    public String getAlfa2_code() {
        return alfa2_code;
    }

    public void setAlfa2_code(String alfa2_code) {
        this.alfa2_code = alfa2_code;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }
}
