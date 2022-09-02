from flask import Flask

#from .views import statistic_views

def create_app():
    app = Flask(__name__)

    if app.config['DEBUG']:
        app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 1 # 캐쉬 업데이트 1초 단위로 하기

    from .views import main_views
    app.register_blueprint(main_views.bp)
    #app.register_blueprint(statistic_views.bp)
    
    return app

# if __name__ == "__main__":
#     application.run(host='0.0.0.0', port=80, debug=True)