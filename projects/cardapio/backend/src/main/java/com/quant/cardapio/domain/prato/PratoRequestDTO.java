package com.quant.cardapio.domain.prato;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

//---
public record PratoRequestDTO(@NotBlank String prato_title,
							  @NotBlank String prato_image,
							  @NotNull Integer prato_price) {

}
