package com.quant.cardapio.domain.prato;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
//---
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Entity(name = "prato")
@Table(name = "prato")
public class Prato {
	//---
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID prato_id;
	private String prato_title;
	private String prato_image;
	private Integer prato_price;
	//---
	@Transient
	private static final long serialVersionUID = 1L;
	//---
	public Prato(PratoRequestDTO data) {
		this.prato_title = data.prato_title();
		this.prato_image = data.prato_image();
		this.prato_price = data.prato_price();
	}
}
