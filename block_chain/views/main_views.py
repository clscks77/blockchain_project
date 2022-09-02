from flask import Blueprint, render_template, request

import uuid

bp = Blueprint('main', __name__, url_prefix='/')

my_balance = 1000
privateKey = '1234'
publicKey =  '5678'
# privateKey = PrivateKey()
# publicKey = privateKey.publicKey()

# blockchain = [create_genesis_block()]
# previous_block = blockchain[0]

# num_of_blocks_to_add = 5

# for i in range(0, num_of_blocks_to_add):
#     block_to_add = next_block(previous_block)
#     blockchain.append(block_to_add)
#     previous_block = block_to_add
#     print("Block #{} added blockchain".format(block_to_add.index))
#     print("Block Data: {}n".format(block_to_add.transactions))
#     print("Block Hash: {}n".format(block_to_add.hash))
# #####


@bp.route("/") # 1. root page : 금액 입력받기
def index():
    return render_template("index.html", my_balance=my_balance)

@bp.route("/make_trx", methods=['POST']) # 2. trx 생성 페이지
def make_trx():
    ####################################
    result = request.form
    balance = my_balance - int(result['amount']) - int(result['fee'])
    return render_template("make_trx.html", amount=result['amount'],fee=result['fee'],
                           privateKey=privateKey, publicKey=publicKey, balance=balance)

@bp.route("/mining") # 3. 네트워크 보여주는 페이지 : trx 검증하기
def mining():
    message = "My test message"
    # signature = Ecdsa.sign(message, privateKey)
    # value = Ecdsa.verify(message, signature, publicKey)
    value = 'abcd'
    return render_template("mining.html", value = value)

@bp.route("/mining_nonce") # 4. 넌스 찾기
def mining_nonce():
    value = uuid.uuid4().hex
    return render_template("mining_nonce.html", value=value)

@bp.route("/blocks") # 5. 블록체인
def blocks():
    return render_template("blocks.html")