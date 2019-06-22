package ru.vkras.banking.DTO;

import javax.persistence.*;

@Entity
@Table(name = "bank")
public class BankDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String account;

    private String bik_bank;

    private String name;

    private String name_mini;

    private String address;

    public BankDTO(String account, String bik_bank, String name, String name_mini, String address) {
        this.account = account;
        this.bik_bank = bik_bank;
        this.name = name;
        this.name_mini = name_mini;
        this.address = address;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getBik_bank() {
        return bik_bank;
    }

    public void setBik_bank(String bik_bank) {
        this.bik_bank = bik_bank;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName_mini() {
        return name_mini;
    }

    public void setName_mini(String name_mini) {
        this.name_mini = name_mini;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
