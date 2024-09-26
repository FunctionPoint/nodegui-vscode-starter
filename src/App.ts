import
	{
		QMainWindow, QWidget, QBoxLayout, Direction, AlignmentFlag,
		QLabel, QPushButton, QPixmap
	} from "@nodegui/nodegui";
import * as fs from "fs";


export class App
{
	myGreetLabel?: QLabel;

	start()
	{
		this.showWindow();
	}

	showWindow()
	{
		const window = new QMainWindow();
		window.setWindowTitle( "Hello NodeGui" );
		window.setStyleSheet( this.styleSheet() );
		window.setCentralWidget( this.centralWidget() );
		window.show();
	}

	styleSheet(): string
	{
		return fs.readFileSync( "assets/default.css" ).toString();
	}

	centralWidget(): QWidget
	{
		const widget = new QWidget();
		widget.setObjectName( "root" );
		widget.setLayout( this.rootLayout() );
		return widget;
	}

	rootLayout(): QBoxLayout
	{
		const layout = new QBoxLayout( Direction.TopToBottom );
		layout.addWidget( this.imageLabel(), 0, AlignmentFlag.AlignCenter );
		layout.addWidget( this.greetLabel(), 0, AlignmentFlag.AlignCenter );
		layout.addWidget( this.button(), 0, AlignmentFlag.AlignCenter );
		return layout;
	}

	imageLabel(): QLabel
	{
		const image = new QPixmap( "assets/logo.png" );
		const label = new QLabel();
		label.setPixmap( image );
		return label;
	}

	greetLabel(): QLabel
	{
		const label = new QLabel();
		label.setObjectName( "greetLabel" );
		label.setText( "Hello from NodeGui!" );
		this.myGreetLabel = label;
		return label;
	}

	button(): QPushButton
	{
		const button = new QPushButton();
		button.setObjectName( "changeStyleButton" );
		button.setText( "Change style" );
		button.addEventListener( "clicked", () => this.onButton() );
		return button;
	}

	onButton()
	{
		this.myGreetLabel?.setInlineStyle( "color: yellow;" );
	}

};