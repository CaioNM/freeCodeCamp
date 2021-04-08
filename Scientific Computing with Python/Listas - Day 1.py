#Listas:

amigos = ['Bel', 'Caio', 'Micael']
print (amigos)
for i in amigos:
	print('Feliz Natal,', i)
print('Pronto')

print('----------------------------------')

for i in [5,4,3,2,1]:
	print(i)

print('----------------------------------')

#As posiçoes das listas começam com 0 ao invez de 1, ou seja, Bel=0, Caio=1... se na hora de pedir pra printar o da posição x-1, ele vai printar o da posiçao correta da contagem de usuario
amigos = ['Bel', 'Caio', 'Micael']
print(amigos[2-1])
print('Pronto')

print('----------------------------------')

#Para medir o comprimento de uma lista se usa a funçao len() que tambem funciona com strings, mas os espaços entre palavras tmb são contados
greet = 'Hello Bob'
print(len(greet))

x = [1,2,3,4,5,6,7,8,9,0]
print(len(x))

nome = 'Caio Nunes de Moura'
print(len(nome))

print('----------------------------------')

#Funçao range é util pra determinar um limite, e eh usado pra criar loops, ela mostra os n primeiros numeros de uma lista, novamente, começando a contagem no 0
amigos = ['Josephm', 'Gleen', 'Sally', 'Percy']
print(len(amigos))
print (range(len(amigos)))

for i in range(len(amigos)):
	amigo = amigos[i]
	print('Feliz ano novo,', amigo)

print('----------------------------------')

#Concatenando Listas:
a = [1,2,3]
b = [4,5,6]
c = a+b
print(c,'\n', a)

#Listas cortadas (obs.: a ultima posiçao não eh contabilizada, se colocar +1, será), basicamente, "vai ate n, mas nao incluindo n"
t = [9,41,12,3,74,15]
print(t[1:3+1])
print(t[1:3])
print(t[:4])	#vai ate o 4 elemento da lista
print(t[3:])	#começa do elemento 3
print(t[:])		#mostra a lista toda


Metodos lista:
- Append: Adiciona itens a lista - NomeDaLista.append(x)
- Count: Conta a quantidade de vezes que um elemento aparece na lista - count = NomeDaLista.count('i')
- Extend: Tambem adiciona
- Index: Procura um item na lista
- Insert: Adiciona algo em uma posição especifica
- Pop: Remove algum objeto da lista
- Remove: Remove de uma posição especifica
- Reverse: Inverte
- Sort: Embaralha
print('----------------------------------')

stuff = list()
stuff.append('brooklyn')	#adicionando itens e criando uma lista
stuff.append(99)
print(stuff)

a = 99 in stuff			#verificando se tem algum item dentro da lista
print(a)
b = 150 in stuff
print(b)

amigos=['Bel','caio','Micael']
amigos.sort()						#embaralhando a lista
print(amigos)

num = [5,41,12,9,74,15]
print(len(num))				#Quantidade de elementos na lista
print(max(num))				#Valor mais alto na lista
print(min(num))				#Valor mais baixo na lista
print(sum(num))				#Soma dos valores
print(sum(num)/len(num))	#Média
print('----------------------------------')