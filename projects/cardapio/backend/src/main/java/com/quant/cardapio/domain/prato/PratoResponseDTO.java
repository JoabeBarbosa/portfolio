package com.quant.cardapio.domain.prato;

import java.util.UUID;

public record PratoResponseDTO(UUID prato_id,String prato_title,String prato_image,Integer prato_price) {
	//---
	public PratoResponseDTO(Prato data) {
		this(data.getPrato_id(),data.getPrato_title() ,data.getPrato_image(),data.getPrato_price());
	}
}
