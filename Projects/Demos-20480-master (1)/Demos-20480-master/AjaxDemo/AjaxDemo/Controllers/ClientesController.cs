using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using AjaxDemo.Models;

namespace AjaxDemo.Controllers
{
	public class ClientesController : ApiController
	{
		/// <summary>
		/// Retorna todos os clientes
		/// </summary>
		/// <returns></returns>
		public IHttpActionResult GetClientes()
		{
			return Ok(Dados.Clientes);
		}

		/// <summary>
		/// Retorna uma lista de clientes filtrados por nome
		/// </summary>
		/// <param name="nome">Nome do cliente</param>
		/// <returns></returns>
		public IHttpActionResult GetClientesPorNome(string nome)
		{
			var clientes = (from c in Dados.Clientes
							where c.Nome.Contains(nome)
							select c).ToList();
			if (clientes.Any())
			{
				return Ok(clientes.ToList());
			}
			return NotFound();
		}

		/// <summary>
		/// Retorna um cliente encontrado pelo seu id
		/// </summary>
		/// <param name="id">Id do cliente</param>
		/// <returns></returns>
		public IHttpActionResult GetClientePorId(int id)
		{
			var cliente = Dados.Clientes.FirstOrDefault(c => c.Id == id);
			if (cliente != null)
			{
				return Ok(cliente);
			}
			return NotFound();
		}

		/// <summary>
		/// Exclui um cliente com o id espeficicado
		/// </summary>
		/// <param name="id">Id do cliente a ser excluído</param>
		/// <returns></returns>
		public IHttpActionResult DeleteCliente(int id)
		{
			var cliente = Dados.Clientes.FirstOrDefault(c => c.Id == id);
			if (cliente != null)
			{
				return Ok(Dados.Clientes.Remove(cliente));
			}
			return NotFound();
		}

		/// <summary>
		/// Adiciona um novo cliente à lista
		/// </summary>
		/// <param name="cliente">Cliente a ser adicionado</param>
		/// <returns></returns>
		public IHttpActionResult PostCliente(Cliente cliente)
		{
			Dados.Clientes.Add(cliente);
			return Ok();
		}
	}

	public static class Dados
	{
		public static readonly List<Cliente> Clientes = new List<Cliente>
		{
			new Cliente{Id = 1,Nome = "Fulano", Endereco = "Rua 1"},
			new Cliente{Id = 2,Nome = "Beltrano", Endereco = "Rua 2"},
			new Cliente{Id = 3,Nome = "Sicrano", Endereco = "Rua 1"},
			new Cliente{Id = 4,Nome = "Joaquim", Endereco = "Rua 3"},
			new Cliente{Id = 5,Nome = "Manoel", Endereco = "Rua 1"},
			new Cliente{Id = 6,Nome = "Maria", Endereco = "Rua 4"},
			new Cliente{Id = 7,Nome = "Anacleto", Endereco = "Rua 4"},
			new Cliente{Id = 8,Nome = "Robledo", Endereco = "Rua 2"},
			new Cliente{Id = 9,Nome = "João", Endereco = "Rua 1"},
			new Cliente{Id = 10,Nome = "Alberto", Endereco = "Rua 3"},
			new Cliente{Id = 11,Nome = "Rodrigo", Endereco = "Rua 5"},
			new Cliente{Id = 12,Nome = "Lucrécia", Endereco = "Rua 6"},
			new Cliente{Id = 13,Nome = "Amarildo", Endereco = "Rua 6"},
			new Cliente{Id = 14,Nome = "Zé", Endereco = "Rua 7"},
			new Cliente{Id = 15,Nome = "Mário", Endereco = "Rua 1"}
		};
	}
}
