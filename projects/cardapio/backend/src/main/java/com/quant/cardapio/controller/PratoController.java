package com.quant.cardapio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quant.cardapio.domain.prato.Prato;
import com.quant.cardapio.domain.prato.PratoRepository;
import com.quant.cardapio.domain.prato.PratoRequestDTO;
import com.quant.cardapio.domain.prato.PratoResponseDTO;

//---
@RestController
@RequestMapping("/prato")
public class PratoController {
	//---
	@Autowired
	PratoRepository pratoRepository;
	//---
	@CrossOrigin(origins = "*",allowedHeaders = "*")
	@PostMapping()
	public ResponseEntity<String> savePrato(@RequestBody PratoRequestDTO data){
		Prato newPrato = new Prato(data);
		pratoRepository.save(newPrato);
		//---
		return ResponseEntity.status(HttpStatus.CREATED).body("New dish created.");
	}
	//---
	@CrossOrigin(origins = "*",allowedHeaders = "*")
	@GetMapping
	public ResponseEntity<List<PratoResponseDTO>> getAll(){
		List<PratoResponseDTO> pratos = pratoRepository.findAll().stream()
																 .map(PratoResponseDTO::new)
																 .toList();
		//---
		return ResponseEntity.status(HttpStatus.OK).body(pratos);
	}
}
