package ru.vkras.banking.api.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.vkras.banking.DTO.CurrencyDTO;
import ru.vkras.banking.repositories.CurrencyRepository;

import java.util.List;

@RestController
@RequestMapping("/currency")
public class CurrencyController {

    @Autowired
    private CurrencyRepository currencyRepository;

    @RequestMapping("/getAll")
    public List<CurrencyDTO> getAllCurrencies(){
        return currencyRepository.findAll();
    }

    @RequestMapping("/create")
    public CurrencyDTO createBank(@RequestBody CurrencyDTO currencyDTO){
        return currencyRepository.save(currencyDTO);
    }

    @RequestMapping("/getByID")
    public CurrencyDTO getCurrencyByID(@RequestParam Long id){
        return currencyRepository.findById(id).orElse(null);
    }
}
